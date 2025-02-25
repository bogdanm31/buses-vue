import useHttp from './useHttp';

const serializeBuses = (data) => {
  const {
    stop: { id, name, stoptimesWithoutPatterns: buses },
  } = data;

  return {
    station: { id, name },
    buses: buses.map((bus) => {
      const {
        arrivalDelay: delay,
        realtimeArrival: arrival,
        serviceDay,
        trip: {
          id: tripId,
          route: { shortName: name },
        },
      } = bus;
      return {
        tripId,
        name,
        arrival,
        delay,
        serviceDay,
      };
    }),
  };
};

export const useGetBuses = async (station) => {
  let data = [];
  const busesQueryDocument = `
  {
    stop(id: "${station}") {
      id
      name stoptimesWithoutPatterns {
        trip {
          id
          route {
            shortName
          }
        }
        realtimeArrival
        arrivalDelay
        serviceDay
      }
    }
  }`;

  const { useHttpPost, isLoading, error } = useHttp('', {
    query: busesQueryDocument,
  });

  await useHttpPost({ query: busesQueryDocument }, serializeBuses).then(
    (response) => {
      data = response;
    }
  );

  return {
    data,
    error,
    isLoading,
  };
};
