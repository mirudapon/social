import type { Icon } from '@tabler/icons-react'

interface NavItem {
  label: string
  icon: Icon
  to: string
}

interface Props {
  items: NavItem[]
}

function Navbar({ items }: Props) {
  return (
    <nav>
      <ul>
        {items.map(item => (
          <li key={item.label}>
            <a href={item.to} key={item.to}>
              <item.icon size={24} />
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
