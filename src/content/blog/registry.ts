import type { FC } from "react";
import FleursDeBachAnimauxBody from "@/content/blog/fleursDeBachAnimauxBody";
import SoinsEnergetiquesDistanceAnimauxBody from "@/content/blog/soinsEnergetiquesDistanceAnimauxBody";
import ReikiPourAnimauxBody from "@/content/blog/reikiPourAnimauxBody";
import TousLesAnimauxBody from "@/content/blog/tousLesAnimauxBody";
import SoinsEnergetiquesHumainsBody from "@/content/blog/soinsEnergetiquesHumainsBody";
import HygieneEnergetiqueBody from "@/content/blog/hygieneEnergetiqueBody";

export const articleBodies: Record<string, FC> = {
  "fleurs-de-bach-animaux": FleursDeBachAnimauxBody,
  "soins-energetiques-distance-animaux": SoinsEnergetiquesDistanceAnimauxBody,
  "reiki-pour-animaux": ReikiPourAnimauxBody,
  "tous-les-animaux": TousLesAnimauxBody,
  "soins-energetiques-humains": SoinsEnergetiquesHumainsBody,
  "hygiene-energetique": HygieneEnergetiqueBody,
};
