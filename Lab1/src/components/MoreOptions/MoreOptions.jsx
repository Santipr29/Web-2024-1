import React from "react"
import MainSections from "../MainSections/MainSections"
import YourSection from "../YourSection/YourSection"
import SubsSection from "../SubsSection/SubsSection"
import ExploreSection from "../ExploreSection/ExploreSection"
import MoreSection from "../MoreSection/MoreSection"
import ConfigSection from "../ConfigSection/ConfigSection"
import "./MoreOptions.css"

export default function MoreOptions(){
    return(
      <>
      <section className="more-options">
      <MainSections></MainSections>
      <YourSection></YourSection>
      <SubsSection></SubsSection>
      <ExploreSection></ExploreSection>
      <MoreSection></MoreSection>
      <ConfigSection></ConfigSection>
      </section>
      </>
    )
}