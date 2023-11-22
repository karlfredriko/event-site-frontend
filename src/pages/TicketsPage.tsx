import TicketForm from "../components/TicketForm";

const TicketsPage = () => {
  const title: string = "Köp din biljett!";

  return (
    <>
      <TicketForm title={title} />
    </>
  );
};

export default TicketsPage;
