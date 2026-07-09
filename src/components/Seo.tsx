import { useEffect } from 'react'

type SeoProps = {
  title: string
  description: string
}

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    const fullTitle = `${title} | Oakline Digital`
    document.title = fullTitle
    setMeta('description', description)
    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', description, 'property')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', description)
  }, [title, description])

  return null
}
