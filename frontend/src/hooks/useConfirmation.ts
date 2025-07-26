import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export function useConfirmation() {
    const location = useLocation()
    const navigate = useNavigate()
    const printRef = useRef<HTMLDivElement>(null)
    const { confirmationDetails } = location.state || {}

    useEffect(() => {
        document.title = 'Booking Confirmation'
    }, [])

    const handlePrint = () => {
        window.print()
    }

    const handleSavePdf = async () => {
        const element = printRef.current
        if (!element) return

        const actions = element.querySelector('.confirmation-actions') as HTMLElement
        if (actions) {
            actions.style.display = 'none'
        }

        await new Promise((resolve) => setTimeout(resolve, 100))

        const canvas = await html2canvas(element)
        const imgData = canvas.toDataURL('image/png')

        const pdf = new jsPDF()
        const imgProps = pdf.getImageProperties(imgData)
        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
        pdf.save(`confirmation-${confirmationDetails?.confirmationNumber}.pdf`)

        if (actions) {
            actions.style.display = 'block'
        }
    }

    return {
        confirmationDetails,
        handlePrint,
        handleSavePdf,
        navigate,
        printRef,
    }
}
