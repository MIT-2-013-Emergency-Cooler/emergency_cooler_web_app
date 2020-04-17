// MIT License

import React from 'react';
import TopMenu from "../components/TopMenu";
import {Container, Header} from "semantic-ui-react";
import Footer from "../components/Footer";

function About() {
	return(
		<div>
			<TopMenu/>
			<Container text style={{marginTop: '5em', marginBottom: '1em'}}>
				<Header as='h1' style={{textAlign: 'center'}}>
					About the VTC
				</Header>
			</Container>
			<Container style={{marginTop: '5em', marginBottom: '1em'}}>
				<Header as='h2'>Motivation </Header>
				<p>
					The Variable Temperature Cryocooler (VTC) is a cryogenic freezer intended for biological research operations.
					In specialized biological research studies, samples may need to be preserved at temperatures below -80\degree C.
					These research studies focus on emerging diseases which propagate through RNA viruses that are found in
					developing parts of the globe in areas without reliable grid power.
					This problem makes reliable sample preservation and obtaining usable data difficult.
					As a result, the VTC is designed for off-grid operation in sample preservation.
				</p>
				<Header as='h2'>Cryogenic Storage Market Gap </Header>
				<p>

					While researching the specific case of RNA sample storage, the design team learned that there is a potential
					market for cryogenic cooling devices that are compact machines which offer storage at various temperatures
					below -80\degree C. As certain biological materials such as stem cells are stored at -150\degree C, the VTC
					is designed to operate at temperatures as low as -150\degree C and reach as high as -20\degree C; extending
					the useful range of the small scale cryogenic freezer. We saw this market gap as an opportunity to design a
					novel and innovative device.
				</p>
				<Header as='h2'>FPSC Technology </Header>
				<p>
					The Variable Temperature Cryocooler uses a free-piston Stirling cycle (FPSC) engine.
					The FPSC technology allows for a smaller size unit than traditional cryogenic freezers which use conventional
					cooling cycles and minimizes moving parts for increased reliability and general robustness.
					An electronic control system, connected to the FPSC system, will allow us to adjust the set point temperature
					of the storage volume. To ensure temperature reliability across the storage volume,
					we designed the storage volume contain multiple temperature sensors to monitor and display the interior
					temperature to the user.
				</p>
				<Header as='h2'>Cold Storage </Header>
				<p>
					The cold storage volume is made up by a specially machined aluminum drawer.
					This drawer and surrounding structures are designed to minimize thermal leakage, which confers an increase
					in the stability of the storage temperatures and reduces power use of the overall device. These reductions
					will be achieved by surrounding the storage volume with vacuum-insulated paneling, which greatly reduces
					these thermal losses to the ambient air by having a thermal conductivity up to ten times less than
					conventional insulation. The designed storage volume drawer can accommodate up to 486 biological cryovial
					samples. These cryovials slot into the solid aluminum drawer to maximize conductive heat transfer and
					minimize the amount of ambient air that enters the system when the VTC's contents are accessed.
					In addition, the system is designed with a phase-change material (PCM) slot to help maintain a constant
					storage temperature. PCM panels which are currently used for shipment of biological samples will allow the
					VTC to easily work with existing solutions. Lastly, the PCM panels can act as a thermal battery,
					allowing the samples held in the drawer to maintain viability over the course of days.
				</p>
				<Header as='h2'>Prepared for Power Outages </Header>
				<p>
					In order to provide consistent power to the system where the local electrical grid experiences frequent
					outages, our system has a robust power management system comprised of a generator and backup battery.
					In a power outage, an automatic transfer switch will trigger the generator to start while the battery serves
					as a power source to bridge the generators' startup time.
				</p>
			</Container>
			<Footer/>
		</div>
	);
}

export default About;
