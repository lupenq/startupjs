import React, { useEffect } from 'react'
import { observer, useSession } from 'startupjs'
import { pathFor, useLocation } from 'startupjs/app'
import { useMedia, Menu, Collapse } from '@startupjs/ui'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { getTitle, useLang } from '../../../../../clientHelpers'
import './index.styl'

const Docs = observer(function DocsComponent ({
  docs,
  subpath = '',
  children,
  level = 1
}) {
  if (!docs) return null
  const [lang] = useLang()
  const { pathname } = useLocation()
  const { desktop } = useMedia()
  const [, $openedCollapses] = useSession('SidebarCollapses')
  const [, $mainSidebar] = useSession('Sidebar.mainSidebar')

  // HACK: open parent collapse on initial render
  useEffect(() => {
    if (subpath) {
      const docPath = pathFor('docs:doc', { path: subpath })
      if (pathname.startsWith(docPath)) $openedCollapses.setDiff(subpath, true)
    }
  }, [])

  const menuItemStyle = { paddingLeft: level * 24 }

  return pug`
    Menu
      each aDocName in Object.keys(docs)
        React.Fragment(key=aDocName)
          - const doc = docs[aDocName]
          - const title = getTitle(doc, lang)
          - const docPath = subpath ? subpath + '/' + aDocName : aDocName
          - const rootPath = pathFor('docs:doc', { lang, path: docPath })
          - const isActive = rootPath === pathname
          if ['mdx', 'sandbox'].includes(doc.type)
            Menu.Item.item(
              style=menuItemStyle
              active=isActive
              to=rootPath
              onPress=desktop ? undefined : () => $mainSidebar.set(false)
            )= title
          if doc.type === 'collapse'
            Collapse(
              variant='pure'
              $open=$openedCollapses.at(docPath)
            )
              Collapse.Header.header(
                iconPosition='right'
                icon=faAngleRight
                iconStyleName='collapse-icon'
              )
                Menu.Item.item(
                  style=menuItemStyle
                  active=isActive
                  to=doc.component ? rootPath : null
                  bold
                  icon=doc.icon
                )= title
              Collapse.Content
                Docs(docs=doc.items subpath=docPath level=level + 1)
  `
})

export default Docs
