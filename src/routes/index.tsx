import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { createFileRoute } from '@tanstack/react-router'
import { VenusAndMarsIcon } from 'lucide-react'

export const Route = createFileRoute('/')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div>
            Hello "/ start"!
            <Card>
                <CardHeader>
                    <VenusAndMarsIcon />
                    <CardTitle>Gender</CardTitle>
                    <CardDescription>descri 1</CardDescription>
                    <p>paragraph</p>
                </CardHeader>
                <CardContent>
                    content
                    <CardDescription>descri 2</CardDescription>
                    <p>paragraph</p>
                </CardContent>
            </Card>
        </div>
    )
}
