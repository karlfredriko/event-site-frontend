import TicketForm from "../components/TicketForm";

const TicketsPage = () => {
  const title: string = "Köp dina biljetter!";

  return (
    <>
      <TicketForm title={title} />
    </>
  );
};

export default TicketsPage;
