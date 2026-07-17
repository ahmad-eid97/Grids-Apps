// Static portfolio mode — order submission is simulated
export const sendOrder = async (_payload: SendOrderPayload) => {
  return { msg: 'Order received!', data: { path: '' } };
};

interface SendOrderPayload {
  name: string;
  phone: string;
  email: string;
  country: string;
  package: string;
  message: string;
}