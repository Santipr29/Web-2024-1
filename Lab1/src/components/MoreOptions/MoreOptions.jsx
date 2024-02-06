import React from "react"
import MainSections from "../MainSections/MainSections"
import YourSection from "../YourSection/YourSection"
import SubsSection from "../SubsSection/SubsSection"
import ExploreSection from "../ExploreSection/ExploreSection"
import MoreSection from "../MoreSection/MoreSection"
import ConfigSection from "../ConfigSection/ConfigSection"

export default function MoreOptions(){
    return(
      <>
      <section>
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