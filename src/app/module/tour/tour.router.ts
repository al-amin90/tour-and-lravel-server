import { Router } from 'express';
import tourController from './tour.controller';

const tourRouter = Router();

tourRouter.post('/create', tourController.createTour);
tourRouter.get('/', tourController.getTour);
tourRouter.get('/:id', tourController.getSingleTour);
tourRouter.put('/:id', tourController.updateSingleTour);
tourRouter.delete('/:id', tourController.deleteTour);
tourRouter.delete('/:id/cancle', tourController.cancelOrder);

export default tourRouter;
