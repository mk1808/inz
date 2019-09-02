package inz.project.services;


import java.util.List;

import inz.project.models.Place;
import inz.project.models.PositionInTrip;
import inz.project.models.Trip;
import inz.project.repositories.PositionInTripRepository;


public interface PositionInTripService {
	

	PositionInTrip createPositionInTrip(PositionInTrip positionInTrip);
	PositionInTrip getPositionInTripById(Long id) ;
List<Place> getPositionInTripByTripId(Long id);
}
