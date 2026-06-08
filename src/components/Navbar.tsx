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
    <nav className="pt-[32px] w-[250px]">
      <ul className="flex flex-col text-xl">
        {items.map(item => (
          <li key={item.label}>
            <a
              className="flex items-center gap-8 p-[16px] hover:bg-gray-100 rounded-[9999px]"
              href={item.to} key={item.to}
            >
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
