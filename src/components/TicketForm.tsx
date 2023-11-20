import { type FormEvent, useRef, FC } from "react";

import s from "./TicketForm.module.css";
import { postData } from "../utils/httpClient";
import { ITicketInfo } from "../models/ITicketInfo";
import { ITicketInfoResponse } from "../utils/ITicketInfoResponse";
import { capitalize } from "../utils/helper";

type TicketFormProps = {
  title: string;
};

const ContactForm: FC<TicketFormProps> = ({ title }) => {
  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const ticketType = useRef<HTMLSelectElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const ticket: ITicketInfo = {
      firstName: capitalize(firstName.current!.value),
      lastName: capitalize(lastName.current!.value),
      email: email.current!.value,
      ticketType: ticketType.current!.value,
    };

    e.currentTarget.reset();
    console.log(ticket);
    postData<ITicketInfo, ITicketInfoResponse>("tickets", ticket);
  };

  return (
    <>
      <form className={s.container} onSubmit={handleSubmit}>
        <h2>{title}</h2>
        <label htmlFor="firstName">Förnamn</label>
        <input
          required
          ref={firstName}
          type="text"
          name="firstName"
          id="firstName"
        />
        <label htmlFor="lastName">Efternamn</label>
        <input ref={lastName} type="text" name="lastName" id="lastName" />
        <label htmlFor="email">E-Post</label>
        <input ref={email} type="email" name="email" id="email" />
        <label htmlFor="ticketType">Biljett</label>
        <select ref={ticketType} name="ticketType" id="ticketType">
          <option value="standard">Standard</option>
          <option value="premium">Premium</option>
        </select>
        <button className={s.button}>Skicka</button>
      </form>
    </>
  );
};

export default ContactForm;
