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
        <label className={s.label} htmlFor="firstName">
          Förnamn
        </label>
        <input
          className={s.input}
          ref={firstName}
          type="text"
          name="firstName"
          id="firstName"
          pattern="^[a-zåäöA-ZÅÄÖ]*$"
          title="Endast bokstäver är giltiga"
          required
        />
        <label className={s.label} htmlFor="lastName">
          Efternamn
        </label>
        <input
          className={s.input}
          ref={lastName}
          type="text"
          name="lastName"
          id="lastName"
          pattern="^[a-zåäöA-ZÅÄÖ]*$"
          title="Endast bokstäver är giltiga"
          required
        />
        <label className={s.label} htmlFor="email">
          E-Post
        </label>
        <input
          className={s.input}
          ref={email}
          type="email"
          name="email"
          id="email"
        />
        <label className={s.label} htmlFor="ticketType">
          Biljett
        </label>
        <select
          className={s.select}
          ref={ticketType}
          name="ticketType"
          id="ticketType"
        >
          <option className={s.option} value="standard">
            Standard
          </option>
          <option className={s.option} value="premium">
            Premium
          </option>
        </select>
        <button className={s.button}>Skicka</button>
      </form>
    </>
  );
};

export default ContactForm;
