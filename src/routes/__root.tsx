import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from '@/components/ui/navigation-menu'

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <React.Fragment>
            <div>
                Hello "__root"!
                <Link to="/">home</Link>
                <Link to="/about">about</Link>
            </div>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link to="/">home</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link to="/about">about</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <Outlet />
        </React.Fragment>
    )
}
