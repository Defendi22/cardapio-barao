import './style.css'
import { pratos, bebidas } from './menu.js'

const brl = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
})
const money = (v) => brl.format(v).replace(/,(\d)$/, ',$10')

const normalize = (s) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

const esc = (s = '') =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

const $menu = document.getElementById('menu')
const $tabs = document.getElementById('tabs')
const $search = document.getElementById('search')
const $empty = document.getElementById('empty')
const $viewer = document.getElementById('viewer')

/* ---------- render ---------- */

const priceRows = (prices) =>
  prices
    .map(
      (p) => `<li>${p.label ? `<span>${esc(p.label)}</span>` : ''}<strong>${money(p.value)}</strong></li>`,
    )
    .join('')

function cardHTML(item, sectionIdx, itemIdx, sharedPrices) {
  const prices = item.prices ?? sharedPrices ?? []
  const haystack = normalize(`${item.name} ${item.desc ?? ''}`)
  return `
    <article class="card" data-search="${esc(haystack)}" data-ref="${sectionIdx}:${itemIdx}" tabindex="0" role="button" aria-label="Ver detalhes de ${esc(item.name)}">
      <div class="card__media">
        <img src="${item.img}" alt="${esc(item.name)}" loading="lazy" decoding="async" />
        ${item.badge ? `<span class="card__badge">${esc(item.badge)}</span>` : ''}
      </div>
      <div class="card__body">
        <h3 class="card__name">${esc(item.name)}</h3>
        ${item.desc ? `<p class="card__desc">${esc(item.desc)}</p>` : ''}
        ${item.prices ? `<ul class="prices${prices.length === 1 && !prices[0].label ? ' prices--single' : ''}">${priceRows(prices)}</ul>` : ''}
      </div>
    </article>`
}

function sectionHead(s) {
  return `
    <header class="section__head">
      <span class="section__ornament" aria-hidden="true">⚜</span>
      <h2>${esc(s.title)}</h2>
      ${s.subtitle ? `<p>${esc(s.subtitle)}</p>` : ''}
    </header>`
}

function pratoSection(s, i) {
  return `
    <section class="section" id="${s.id}" data-section>
      ${sectionHead(s)}
      ${
        s.banner
          ? `<div class="banner"><span class="banner__label">Todos os bacalhaus</span><ul class="banner__prices">${s.banner
              .map((p) => `<li><span>${esc(p.label)}</span><strong>${money(p.value)}</strong></li>`)
              .join('')}</ul></div>`
          : ''
      }
      <div class="grid">
        ${s.items.map((it, j) => cardHTML(it, i, j, s.banner)).join('')}
      </div>
      ${
        s.notes
          ? `<div class="notes">${s.notes
              .map((n) => `<div class="note"><h4>${esc(n.title)}</h4><p>${esc(n.text)}</p></div>`)
              .join('')}</div>`
          : ''
      }
    </section>`
}

function bebidasSection(b) {
  return `
    <section class="section section--drinks" id="${b.id}" data-section>
      ${sectionHead(b)}
      <aside class="promo">
        <span class="promo__tag">Super promo</span>
        <p class="promo__title">${esc(b.promo.title)}</p>
        <p class="promo__text">${esc(b.promo.text)}</p>
      </aside>
      <div class="drinks">
        ${b.groups
          .map(
            (g) => `
          <div class="drinks__group" data-group>
            <h3>${esc(g.title)}</h3>
            ${g.note ? `<p class="drinks__note">${esc(g.note)}</p>` : ''}
            <ul>
              ${g.items
                .map(
                  (d) => `
                <li class="drink" data-search="${esc(normalize(`${d.name} ${d.desc ?? ''} ${g.title}`))}">
                  <div class="drink__line">
                    <span class="drink__name">${esc(d.name)}</span>
                    <span class="drink__dots" aria-hidden="true"></span>
                    <strong>${money(d.value)}</strong>
                  </div>
                  ${d.desc ? `<span class="drink__desc">${esc(d.desc)}</span>` : ''}
                </li>`,
                )
                .join('')}
            </ul>
          </div>`,
          )
          .join('')}
      </div>
    </section>`
}

const sections = [...pratos, bebidas]

$menu.innerHTML = pratos.map(pratoSection).join('') + bebidasSection(bebidas)
$tabs.innerHTML = sections
  .map((s) => `<li><a href="#${s.id}" data-tab="${s.id}">${esc(s.title)}</a></li>`)
  .join('')

/* ---------- active tab on scroll ---------- */

const tabLinks = [...$tabs.querySelectorAll('a')]
const sectionEls = [...document.querySelectorAll('[data-section]')]
let activeId = null

const setActive = (id) => {
  if (id === activeId) return
  activeId = id
  tabLinks.forEach((a) => {
    const on = a.dataset.tab === id
    a.classList.toggle('is-active', on)
    if (on) {
      a.setAttribute('aria-current', 'true')
      $tabs.scrollTo({ left: a.offsetLeft - ($tabs.clientWidth - a.offsetWidth) / 2, behavior: 'smooth' })
    } else a.removeAttribute('aria-current')
  })
}

// A seção ativa é a última cujo topo já passou da barra fixa.
let lockUntil = 0
let ticking = false
const syncActive = () => {
  ticking = false
  if (Date.now() < lockUntil) return
  const line = document.querySelector('.tabs').offsetHeight + 40
  let current = sectionEls[0]
  for (const s of sectionEls) {
    if (!s.hidden && s.getBoundingClientRect().top <= line) current = s
  }
  const atBottom = innerHeight + scrollY >= document.documentElement.scrollHeight - 4
  setActive(atBottom ? sectionEls.at(-1).id : current.id)
}
addEventListener('scroll', () => {
  if (!ticking) requestAnimationFrame(syncActive)
  ticking = true
}, { passive: true })
syncActive()

$tabs.addEventListener('click', (e) => {
  const a = e.target.closest('a')
  if (!a) return
  e.preventDefault()
  const target = document.getElementById(a.dataset.tab)
  lockUntil = Date.now() + 900
  setActive(a.dataset.tab)
  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  history.replaceState(null, '', `#${a.dataset.tab}`)
})

/* ---------- search ---------- */

$search.addEventListener('input', () => {
  const q = normalize($search.value.trim())
  let total = 0
  document.querySelectorAll('[data-section]').forEach((sec) => {
    let count = 0
    sec.querySelectorAll('[data-search]').forEach((el) => {
      const hit = !q || el.dataset.search.includes(q)
      el.hidden = !hit
      if (hit) count++
    })
    sec.querySelectorAll('[data-group]').forEach((g) => {
      g.hidden = !g.querySelector('[data-search]:not([hidden])')
    })
    sec.hidden = count === 0
    total += count
  })
  document.body.classList.toggle('is-searching', !!q)
  $empty.hidden = total > 0
})

/* ---------- detail viewer ---------- */

function openItem(ref) {
  const [si, ii] = ref.split(':').map(Number)
  const section = pratos[si]
  const item = section.items[ii]
  const prices = item.prices ?? section.banner ?? []
  const img = $viewer.querySelector('img')
  img.src = item.img
  img.alt = item.name
  $viewer.querySelector('.viewer__body').innerHTML = `
    <p class="viewer__cat">${esc(section.title)}</p>
    <h3>${esc(item.name)}</h3>
    ${item.desc ? `<p class="viewer__desc">${esc(item.desc)}</p>` : ''}
    <ul class="prices">${priceRows(prices)}</ul>`
  $viewer.showModal()
}

$menu.addEventListener('click', (e) => {
  const card = e.target.closest('.card')
  if (card) openItem(card.dataset.ref)
})
$menu.addEventListener('keydown', (e) => {
  const card = e.target.closest('.card')
  if (card && (e.key === 'Enter' || e.key === ' ')) {
    e.preventDefault()
    openItem(card.dataset.ref)
  }
})
$viewer.addEventListener('click', (e) => {
  if (e.target === $viewer || e.target.closest('.viewer__close')) $viewer.close()
})
