import {
  LireAussi,
  LinkPage,
  MaillagePagesSite,
  ArticleFigure,
} from "@/content/blog/articleUi";
import { blogBodyImage } from "@/data/images";

export default function TousLesAnimauxBody() {
  return (
    <>
      <p className="lead text-lg text-warm-text">
        Chiens, chats, chevaux, lapins, oiseaux, reptiles, NAC… La question revient
        souvent : <strong>tous les animaux</strong> peuvent-ils recevoir des soins ?
        Ma réponse : oui, avec des nuances.
      </p>

      <ArticleFigure
        src={blogBodyImage("tous-les-animaux")}
        alt="Divers compagnons animaux — soins énergétiques toutes espèces"
        caption="Chaque espèce communique et reçoit l'énergie à sa manière."
      />

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        Ce que j&apos;accompagne le plus
      </h2>
      <p>
        Chiens et chats représentent la majorité de mes séances animales. Les chevaux
        aussi, surtout en communication animale. Lapins, oiseaux, furets : oui, avec
        parfois moins de « retour » visible mais un ressenti chez le propriétaire.
      </p>

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        Quand je dis non
      </h2>
      <p>
        Si je ne parviens pas à me connecter après une tentative honnête, je vous le dis.
        Si la situation relève clairement d&apos;une urgence vétérinaire, je vous
        oriente vers un professionnel de santé animale.
      </p>

      <MaillagePagesSite />

      <LireAussi excludeSlug="tous-les-animaux" />

      <p className="mt-8 text-sm">
        <LinkPage to="/methodes/communication-animale">Communication animale</LinkPage>
      </p>
    </>
  );
}
