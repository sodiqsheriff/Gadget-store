import React from 'react'
import { Wrapper } from '../_Component/Wrapper'

export const About = () => {
  return (
       <section className="about_section section_space">
			<div className="container">
				<div className="row align-items-center">
					<div className="col col-md-6 order-last">
						<div className="about_image">
							<img src="assets/images/about/about_image.jpg" alt="image_not_found" />
						</div>
					</div>
					<div className="col col-md-6">
						<div className="about_content">
							<h2 className="about_small_title text-uppercase">Comnay History</h2>
							<h3 className="about_title">Electro is a clean, modern, user friendly, responsive</h3>
							<p>
								Collaboratively administrate empowered markets via plug-and-play maintain networks. Dynamically usable procrastinate B2B users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.
							</p>
							<ul className="counter_wrap ul_li">
								<li>
									<span className="counter">12</span>
									<small>Years Experience</small>
								</li>
								<li>
									<span><strong className="counter">10</strong>K</span>
									<small>Happy Customers</small>
								</li>
								<li>
									<span><strong className="counter">100</strong>%</span>
									<small>Clients Satisfaction</small>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
  )
}
