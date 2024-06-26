import styles from "./Flight.module.css";
import takeoff from "../../../../../assets/fast-booking_flight_takeoff.svg";
import land from "../../../../../assets/fast-booking_flight_land.svg";
import FlightNumber from "./FlightNumber";
import FlightDateTime from "./FlightDateTime";

export default function Flight({
  flight,
  setFlightNumber,
  setDepartureDate,
  setArrivalDate,
  setDepartureTime,
  setArrivalTime,
  disabled,
}) {
  return (
    <div className={styles.services__info}>
      <div className={styles.services__info__wrapper}>
        <span className={styles.info__heading}>Flight information</span>
        <div className={styles.services__info__inputs}>
          <div className={styles.services__info__input}>
            <div className={styles.city__wrapper}>
              <div className={styles.codeCity__wrapper}>
                <div className={styles.code}>
                  <span className={styles.code__heading}>
                    {flight.departureIata ? flight.departureIata : "CODE"}
                  </span>
                  <img
                    className={styles.code__img}
                    src={takeoff}
                    alt="Plane logo"
                  />
                </div>
                <span className={styles.city}>
                  {flight.departureCity ? flight.departureCity : "City"}
                </span>
              </div>
              <div className={styles.codeCity__wrapper}>
                <div className={styles.code}>
                  <span className={styles.code__heading}>
                    {flight.transitIata
                      ? flight.transitIata
                      : flight.arrivalIata
                      ? flight.arrivalIata
                      : "CODE"}
                  </span>
                  <img
                    className={styles.code__img}
                    src={land}
                    alt="Plane logo"
                  />
                </div>
                <span className={styles.city}>
                  {flight.transitCity
                    ? flight.transitCity
                    : flight.arrivalCity
                    ? flight.arrivalCity
                    : "City"}
                </span>
              </div>
            </div>
            <div className={styles.flight__info}>
              <FlightNumber
                setFlightNumber={setFlightNumber}
                disabled={disabled}
              />
              <div className={styles.flight__date__wrapper}>
                <FlightDateTime
                  flightType={"Departure Date"}
                  inputType="date"
                  setData={setDepartureDate}
                  disabled={disabled}
                />
                <FlightDateTime
                  flightType="Arrival Date"
                  inputType="date"
                  setData={setArrivalDate}
                  disabled={disabled}
                />
              </div>
              <div className={styles.flight__date__wrapper}>
                <FlightDateTime
                  flightType="Departure Time"
                  inputType="time"
                  setData={setDepartureTime}
                  disabled={disabled}
                />
                <FlightDateTime
                  flightType="Arrival Time"
                  inputType="time"
                  setData={setArrivalTime}
                  disabled={disabled}
                />
              </div>
            </div>
          </div>

          <div className={styles.services__info__input}>
            <div className={styles.city__wrapper}>
              <div className={styles.codeCity__wrapper}>
                <div className={styles.code}>
                  <span className={styles.code__heading}>
                    {flight.transitIata ? flight.transitIata : "CODE"}
                  </span>
                  <img
                    className={styles.code__img}
                    src={takeoff}
                    alt="Plane logo"
                  />
                </div>
                <span className={styles.city}>
                  {flight.transitCity ? flight.transitCity : "City"}
                </span>
              </div>

              <div className={styles.codeCity__wrapper}>
                <div className={styles.code}>
                  <span className={styles.code__heading}>
                    {flight.transitIata ? flight.arrivalIata : "CODE"}
                  </span>
                  <img
                    className={styles.code__img}
                    src={land}
                    alt="Plane logo"
                  />
                </div>
                <span className={styles.city}>
                  {flight.transitCity ? flight.arrivalCity : "City"}
                </span>
              </div>
            </div>
            <div className={styles.flight__info}>
              <FlightNumber />
              <div className={styles.flight__date__wrapper}>
                <FlightDateTime flightType="Departure Date" inputType="date" />
                <FlightDateTime flightType="Arrival Date" inputType="date" />
              </div>
              <div className={styles.flight__date__wrapper}>
                <FlightDateTime flightType="Departure Time" inputType="time" />
                <FlightDateTime flightType="Arrival Time" inputType="time" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
