"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Main Course",
    href: "/maincourse",
    description:
      "Generous portions of flavorful dishes designed to satisfy your appetite.",
  },
  {
    title: "Family Size",
    href: "/familysize",
    description:
      "Abundant servings perfect for sharing among your loved ones.",
  },
  {
    title: "Sandwiches",
    href: "/sandwiches",
    description:
      "Deliciously layered ingredients between two slices of fresh bread.",
  },
  {
    title: "Desserts",
    href: "/desserts",
    description:
      "Decadent and sweet treats to indulge your taste buds.",
  },
  {
    title: "Breakfast",
    href: "/breakfast",
    description:
      "Energizing morning options to kickstart your day with delight.",
  },
  {
    title: "Drinks",
    href: "/drinks",
    description:
      "Refreshing beverages to quench your thirst and complement your meal.",
  },

]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/home" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-myblack ">
              {components.map((component) => (
                <Link
                  key={component.title}
                  href={component.href}
                  legacyBehavior
                  passHref
                >
                  <ListItem
                    title={component.title}>
                    {component.description}
                  </ListItem>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contactus" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block bg-myblack select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:bg-[#666262] rounded-sm",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-orange">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground text-white">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
