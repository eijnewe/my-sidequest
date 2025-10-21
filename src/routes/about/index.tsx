import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
