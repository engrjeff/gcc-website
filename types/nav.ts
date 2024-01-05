export interface NavItem {
  title: string
  href: string
  disabled?: boolean
  external?: boolean
  submenu?: NavItem[]
}
