import { Router } from 'express';
import bookingController from './booking.controller';

const bookingRouter = Router();

bookingRouter.post('/create', bookingController.createBooking);
bookingRouter.get('/', bookingController.getBooking);
bookingRouter.get('/:id', bookingController.getSingleBooking);
bookingRouter.put('/:id', bookingController.updateSingleBooking);
bookingRouter.delete('/:id', bookingController.deleteBooking);

export default bookingRouter;
