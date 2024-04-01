export interface CarInterface {
  name: string;
  color: string;
  id?: number;
}

type ResponseRequest = Request | string;

export async function getCar(
  resource: ResponseRequest,
): Promise<Array<CarInterface>> {
  const fetchCar = await fetch(resource);
  const getSomeCar = await fetchCar.json();
  return getSomeCar;
}

export async function postCar(resource: ResponseRequest, obj: CarInterface) {
  await fetch(resource, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(obj),
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

export async function deleteCar(resource: ResponseRequest, id: number) {
  try {
    await fetch((resource as string) + id, {
      method: "DELETE",
    }).then((response) => console.log(response));
  } catch (err) {
    console.log(err);
  }
}

export const garageResponse = await getCar("http://127.0.0.1:3000/garage/");
