package inz.project.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import inz.project.models.PositionInSchedule;
import inz.project.models.PositionInTrip;
import inz.project.models.Schedule;

public interface ScheduleRepository extends JpaRepository<Schedule, Long> {

	List<Schedule> getSchedulesByPositionsInScheduleIn(List<PositionInSchedule> position);
}
