<template>
	<Layout>
		<template slot="title">{{ title }}</template>
		<v-row>
			<v-col class="col-12 col-xl-8">
				<v-row>
					<g-image
						src="~/assets/images/turkeys-pan.png"
						class="gimage mx-auto mt-lg-8 mb-xl-8"
						width="1200"
					/>
				</v-row>
				<v-row>
					<v-col>
						<Portraits3Wide
							:img2="require('~/assets/images/' + pic2)"
							:img3="require('~/assets/images/' + pic3)"
						></Portraits3Wide>
					</v-col>
				</v-row>
			</v-col>
			<v-col class="px-lg-12">
				<!-- <div v-if="linkedDoc" class="ordering text-center mb-10">
					<DownloadBtn :doc="linkedDoc"></DownloadBtn>
				</div>
				<div v-if="!linkedDoc" class="ordering text-center mb-10">
					<ContactUsBtn></ContactUsBtn>
				</div> -->
				<v-row>
					<v-col class="col-sm-7 col-md-8 col-xl-12 pt-8">
						<p>
							We have Great Taste Award winning turkeys available to buy
							directly from the farm. Our turkeys are a mixture of Norfolk
							Blacks and Bronzes they are (very) free range and slowly grown.
							Are they organic though? As good as, we are in our 2nd year of
							official conversion to organic and the turkeys are fed organic
							feed.
						</p>

						<p>
							We usually have a range of sizes which are £4.95/lb. We now have
							only family size turkeys remaining (6-8.5lb) and these are all
							available at a fixed price of £45. Packaging (biodegradable and
							reusable) to keep the bird frozen is £7. Courier fees are £10 on
							top of that. So, packaging and postage is £17.
						</p>

						<p>
							To book a turkey
							<a
								href="https://docs.google.com/forms/d/e/1FAIpQLSfFLnP1YzQsG4ZxuqZbF_76P3uyHbYo3jcP0Bd-X_QQd5j79g/viewform?c=0&w=1"
								target="_blank"
								><v-btn small class="secondary"> Fill in the form</v-btn></a
							>
							and
							<a href="http://paypal.me/TheInkpot/25" target="_blank"
								><v-btn small class="secondary">pay the £25 deposit</v-btn></a
							><br />When you have received confirmation from Hannah that all is
							well with your order
							<a href="https://www.paypal.me/TheInkpot" target="_blank"
								><v-btn small class="secondary"
									>pay the balance via paypal</v-btn
								></a
							>
						</p>

						<p>
							The Permaculture ethic of
							<a
								href="https://knowledgebase.permaculture.org.uk/ethics"
								target="_blank"
								>Fair Shares</a
							>
							proposes that resources need to be shared amongst everyone fairly.
							To this end, The Inkpot would like to hear from anyone who feeds
							the homeless as we have some birds reserved for them. Please get
							in touch to find out more.
						</p>
						<p>
							"The Turkey last year was probably the best I have ever tasted. I
							suggest that you take a little home-made Crab Apple jelly and
							massage it into the flesh before roasting - fantastic and Ho Ho Ho
							- ours didn't last many meals!!!!" Brian
						</p>

						<p>
							"A beautiful looking bird, nicely proportioned. The aroma suggests
							it has been well hung. Excellent flavour to the dark meat. All in
							all a fine eating experience" Great Taste Award Judge
						</p>
					</v-col>
					<v-col
						class="d-xl-none d-flex justify-center justify-sm-end align-start"
					>
						<g-image src="~/assets/images/turkey-order.png" width="256" />
					</v-col>
				</v-row>
			</v-col>
		</v-row>
		<v-row>
			<v-col class="px-lg-12">
				<Portraits3Narrow
					:img2="require('~/assets/images/' + pic2)"
					:img3="require('~/assets/images/' + pic3)"
				></Portraits3Narrow>
				<v-row>
					<v-col class="col-xl-9">
						<div class="extra-text">
							<p>
								"A well-reared turkey, the flavour of the meat came through
								well" Great Taste Award Judge.
							</p>

							<p>
								Here are some fantastic ideas from an Inkpot Turkey buyer
							</p>
							<div class="pl-4">
								<p>
									"So I've been toying with buying an Inkpot turkey on and off
									for the past year since Hannah started selling them. Firstly,
									the cost put me off - £40+ seemed like a lot to spend on one
									bird, until I asked around and realised I was very much out of
									touch with what intensively farmed shop/butchers turkeys cost.
									There's also only two of us eating meat on Christmas Day in
									this house, and I really didn’t want to have to think about
									making a thousand meals with cooked turkey.
								</p>

								<p>
									However, after reading another person's review about how they
									cooked the whole bird and then portioned it up and
									re-freezing, I thought I would give it a go. So I bought a
									bird, defrosted it in the fridge for 48 hours (it defrosted
									enough for me to joint it) and now I have a re-frozen turkey
									crown for Christmas day, and enough portions for at least 10
									meals (including soup and stock from the bones yet to come.)
									Result!
								</p>

								<p>
									Be aware with re-freezing - as long as the defrosting is done
									in a fridge, for a maximum of 72 hours, you can re-freeze the
									meat. If you take off the drumsticks and wings first after 48
									hours, it will then allow more air to the rest of the bird,
									and it will be easier to joint it. Below is a 9lb bird
									jointed."
								</p>
							</div>
						</div>
					</v-col>
					<v-col class="d-none d-xl-flex justify-center align-start">
						<g-image src="~/assets/images/turkey-order.png" width="256" />
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</Layout>
</template>

<script>
import DownloadBtn from '@/components/DownloadBtn.vue';
import Portraits3Wide from '@/components/Portraits3Wide.vue';
import Portraits3Narrow from '@/components/Portraits3Narrow.vue';
import ContactUsBtn from '@/components/ContactUsBtn.vue';

export default {
	data() {
		return {
			title: 'Turkey',
			linkedDoc: '',
			pic1: 'turkeys1.jpg',
			pic2: 'turkeys2.png',
			pic3: 'turkey3.png',
		};
	},
	components: {
		DownloadBtn,
		Portraits3Wide,
		Portraits3Narrow,
		ContactUsBtn,
	},
};
</script>

<style lang="sass" scoped></style>
