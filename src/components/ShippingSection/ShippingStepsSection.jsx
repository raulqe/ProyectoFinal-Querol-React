import React from 'react'

export const ShippingStepsSection = () => {
  return (
    <>
        <section className='ShippingStepsSection'>
            <article className='ShippingStepsCardContainer' >

                <div className='TitleStepContainer'>
                    <h4 className="TitleFont">1 step:</h4>
                    <p className='SubtitleFontStep'>Loock our products and make your choice</p>
                </div>
                <div className='ImageBakgroundContainer'>
                    <img className='imageBakgrn' src={"https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&amp;w=870&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                    <img className='imageBakgrn' src={"https://plus.unsplash.com/premium_photo-1681433396703-04f3879c9831?q=80&amp;w=2404&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                </div>
                <div>
                    <p className='descriptionStep'>"Step into style! Browse our vibrant collection by visiting our store or website, where your perfect t-shirt awaits your discovery."</p>
                </div>

            </article>

            <article className='ShippingStepProcesContainer'>
                <h4 className="TitleFont">2 step</h4>
                <p className='SubtitleFontStep'>Wait calmly, we will take care of your order.</p>
                <p className='descriptionProcesStep'>"Sit back and relax as we handle the details! Once you’ve made your choice, our team will swiftly process your order and prepare it for shipment, ensuring a smooth delivery experience."</p>
                <img className='imageBakgrnSecondProces' src="https://images.unsplash.com/photo-1484075449844-e945b251559e?q=80&amp;w=861&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            </article>
            <article className='ShippingStepsCardContainer' >


                <div className='ShippingStepsFinallyContiner'>
                    <div className='TitleStepContainer'>
                    <h4 className="TitleFont">3 step</h4>
                    <p className='SubtitleFontStep'>
                        Ready, Our friendly team of delivery people will knock on your door in a couple of days.</p>
                    <p className='descriptionStep'>"Excitement is in the air! Once your t-shirt arrives, you’ll be all set to enjoy your new look—delivered right to your doorstep for your ultimate convenience."</p>
                    </div>
                    <img className='imageBakgrn' src={"https://plus.unsplash.com/premium_photo-1661539097669-bcabe21ac738?q=80&amp;w=870&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                    {/* <img  className='imageBakgrn' src={"https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&amp;w=870&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/> */}
                </div>


            </article>

        </section>
    </>
  )
}
