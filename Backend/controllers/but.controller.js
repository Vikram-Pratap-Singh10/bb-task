import { Bus } from "../model/bus.model.js";

export const createBooking = async (req, res, next) => {
    try {
        const booking = await Bus.create(req.body)
        return booking ? res.status(200).json({ message: "created success", status: true }) :
            res.status(400).json({ message: "Bad Request", status: false })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error", status: false })
    }
}
export const getBooking = async (req, res, next) => {
    try {
        const booking = await Bus.find()
        return (booking.length > 0) ? res.status(200).json({ Booking: booking, status: true }) :
            res.status(404).json({ message: "Booking Not Found", status: false })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error", status: false })
    }
}
export const updateBooking = async (req, res, next) => {
    try {
        const existBooking = await Bus.findById(req.params.id)
        if (!existBooking) return res.status(404).json({ message: "Not Found", status: false })
        const updateBooking = await Bus.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return (updateBooking) ? res.status(200).json({ message: "Updated Successfull", status: true }) :
            res.status(400).json({ message: "Bad Request", status: false })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: "Internal Server Error", status: false })
    }
}
export const deleteBooking = async (req, res, next) => {
    try {
        const booking = await Bus.findByIdAndDelete(req.params.id)
        if (!booking) return res.status(404).json({ message: "Booking Not Found", status: false })
        return res.status(200).json({ message: "Booking Delete Successfull", status: true })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error", status: false })
    }
}

export const getBookingById = async (req, res, next) => {
    try {
        const booking = await Bus.findById(req.params.id)
        if (!booking) return res.status(404).json({ message: "Booking Not Found", status: false })
        return res.status(200).json({ Booking: booking, status: true })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error", status: false })
    }
}