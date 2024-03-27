interface CarInterface {
  name: string;
  color: string;
  id: number;
}

type ResponseRequest = Request | string;

export async function getCar(
  resource: ResponseRequest,
): Promise<Array<CarInterface>> {
  const fetchCar = await fetch(resource);
  const getSomeCar = await fetchCar.json();
  return getSomeCar;
}

export const garageResponse = await getCar("http://127.0.0.1:3000/garage/");
