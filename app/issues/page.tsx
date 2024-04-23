import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChurch, faGun} from "@fortawesome/free-solid-svg-icons";
import {faFamily, faGraduationCap, faHouseChimney, faScroll} from "@fortawesome/pro-duotone-svg-icons";

function Item({title, icon, description,id}: { title: string, icon: JSX.Element, description: string,id:string }) {
    return <div id={id} className="flex w-full max-w-screen-xl mx-auto bg-white bg-opacity-10 mb-3">
        <div className="p-3 w-56 bg-orange2-500 text-cream-500 flex-col px-10 hidden sm:flex">
            {icon}
        </div>
        <div className="py-10 w-full p-6">
            <h3 className="mb-2 font-body text-3xl">{title}</h3>
            <p className="text-2xl w-full my-auto">
                {description}
            </p>
        </div>

    </div>
}

export default function donate() {
    return <div>
        <div className="min-h-screen pt-8 bg-slate-700">
            <h2 className="text-center text-6xl bg-orange1-500 p-3 text-cream-500 bold font-body mb-12">On The
                Issues</h2>
            <div className="bg-green-500">
                <Item id="god-give"
                    title="Protection of God-Given and
                Constitutional Rights"
                    icon={<FontAwesomeIcon className="m-auto" size="lg" icon={faChurch}/>}
                    description="            As a devout Christian, Curt recognizes the importance of preserving our God-given and
            constitutional
            rights. He will stand firm in safeguarding South Dakotans' fundamental freedoms, actively
            mobilizing
            efforts to overturn SB201 and ensure property owners retain control over their private property.
            Curt will ensure that the voices of South Dakotans are heard and their rights protected against
            any
            attempts to erode these fundamental freedoms."
                />
                <Item
                    id="family"
                    title="Safeguarding Children and Family Values"
                    icon={<FontAwesomeIcon className="m-auto" size="lg" icon={faFamily}/>}
                    description="With an unwavering commitment to safeguarding our youth, Curt is dedicated to combating the harmful effects of online pornography by advocating for measures to restrict access to it. He will tirelessly work to resurrect HB1257 to shield South Dakota children from the online pornography industry and champions parental rights. Additionally, Curt plans to address issues such as transgender sports participation, social media regulation, and restroom access, all with a focus on protecting our children and preserving family values."
                />
                <Item
                    id="school-choice"
                    title="Education Reform and School Choice"
                    icon={<FontAwesomeIcon className="m-auto" size="lg" icon={faGraduationCap}/>}
                    description="Curt believes in prioritizing core subjects and improving the education system by championing school choice initiatives. He will empower parents and students to choose the educational path that best fits their needs, ensuring a brighter future for South Dakota's youth."
                />
                <Item
                id="tax-relief"
                    title="Property Tax Relief for Long-Term Homeowners"
                      icon={<FontAwesomeIcon className="m-auto" size="lg" icon={faHouseChimney}/>}
                      description="Recognizing the burden of rising property taxes on lifelong homeowners, Curt will advocate for legislation to freeze property taxes and ensure minimal yearly increases. He believes that no South Dakotan should be priced out of their homes due to surging demand."/>
                <Item
                    id="second-amendment"
                    title="Protection of Second Amendment Rights" description="As a veteran and avid hunter, Curt staunchly defends South Dakotans' right to bear arms. He advocates for responsible gun ownership and will tirelessly fight to uphold the integrity of our Second Amendment rights."
                      icon={<FontAwesomeIcon className="m-auto" size="lg" icon={faGun}/>}/>
            </div>
        </div>
    </div>
}