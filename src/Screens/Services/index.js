import {useState} from 'react'

const Index = () => {

    const [services, setservices] = useState([
        {
            'id':'1',
            'icon':'fas fa-user',
            'title':'UI/Ux Design'
        },
        {
            'id':'2',
            'icon':'fas fa-user',
            'title':'Graphic Design'
        },
        {
            'id':'3',
            'icon':'fas fa-user',
            'title':'Web Development'
        },
        {
            'id':'4',
            'icon':'fas fa-user',
            'title':'App Development'
        },
        {
            'id':'5',
            'icon':'fas fa-user',
            'title':'Social Media Management'
        },
        {
            'id':'6',
            'icon':'fas fa-user',
            'title':'SEO/SMO'
        },
    ]);

    return (
        <section id="services" className="service--section">
            <div className="container">
                <div className="row mb-3">
                    <div className="col-md-8">
                        <h5 className="about--sub--title">Services</h5>
                        <h3 className="about--title">Leading the way in Creative Digital Agency</h3>
                        <div className="bar"></div>
                    </div>
                </div>
                <div className="row">

                    {
                        services.map ((service) => (
                            <div className="col-md-4" key={service.id}>
                                <div className="service-box my-4">
                                    <div className="icon">
                                        <i className={service.icon}></i>
                                    </div>
                                    <div className="service-title">
                                        <h3>{service.title}</h3>
                                    </div>
                                    <a href="#">
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Index
