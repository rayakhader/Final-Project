import { useConfirmation } from "../../hooks/useConfirmation"

function ConfirmationPage() {
  const {
    confirmationDetails,
    handlePrint,
    handleSavePdf,
    navigate,
    printRef,
  } = useConfirmation()

  if (!confirmationDetails) {
    return (
      <div>
        <h2>No confirmation details found.</h2>
        <button onClick={() => navigate('/')}>Go Home</button>
      </div>
    )
  }

  return (
    <div className="confirmation-page" ref={printRef}>
      <h1>Booking Confirmation</h1>
      <p><strong>Confirmation Number:</strong> {confirmationDetails.confirmationNumber}</p>
      <p><strong>Booking Status:</strong> {confirmationDetails.bookingStatus}</p>

      <h2>Guest Details</h2>
      <p><strong>Name:</strong> {confirmationDetails.customerName}</p>

      <h2>Hotel Details</h2>
      <p><strong>Hotel:</strong> {confirmationDetails.hotelName}</p>

      <h2>Room Details</h2>
      <p><strong>Room Number:</strong> {confirmationDetails.roomNumber}</p>
      <p><strong>Room Type:</strong> {confirmationDetails.roomType}</p>

      <h2>Booking Info</h2>
      <p><strong>Booking Date:</strong> {new Date(confirmationDetails.bookingDateTime).toLocaleString()}</p>
      <p><strong>Payment Method:</strong> {confirmationDetails.paymentMethod}</p>
      <p><strong>Total Cost:</strong> ${confirmationDetails.totalCost}</p>

      <div className="confirmation-actions">
        <button onClick={handlePrint}>Print</button>
        <button onClick={handleSavePdf}>Save as PDF</button>
      </div>
    </div>
  )
}

export default ConfirmationPage
