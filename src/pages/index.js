import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from '../components/1_hero'
import EntryText from "../components/2_entry_text"
import Schwerpunkte from '../components/3_schwerpunkte'
import Coaching from "../components/4_Coaching"
import TierCoaching from "../components/5_tiergestuetztes_coaching"
import About from "../components/6_About"
import Vita from "../components/Vita"
import Cta from "../components/Cta"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <EntryText />
    <Schwerpunkte />
            <Coaching />
            <TierCoaching />
            <About />
            <Vita />
            <Cta />
  </Layout>
)

export default IndexPage
