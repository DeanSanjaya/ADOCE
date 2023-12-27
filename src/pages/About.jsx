import { Navbar } from "../components/navbar";

const About = () => {
	const urlImage = "https://firebasestorage.googleapis.com/v0/b/my-doctor-01-da016.appspot.com/o/Group%201.png?alt=media&token=575ea831-eaba-46bf-bf98-ce2b57b00bb5";
	const imageurl = "/public/Cat.jpg"
	const Urlimage = "/public/dog.jpg"
	return (
		<div>
			<Navbar />
			<div className="bg-[#8EACCD] h-screen justify-center flex-col flex px-[75px]">
				<div className="flex items-center justify-between w-full">
					<div className="w-2/4">
						<h1 className="font-bold text-5xl w-[70%] mb-5">
							Prepare Your Home <span className="text-[#D2E0FB]">For Your Cat</span>
						</h1>
						<p className="w-[70%] mb-8">ADOCE berkomitmen untuk menyelamatkan dan merawat hewan peliharaan. Kami memperjuangkan hak-hak hewan dan berupaya mencari rumah yang baik bagi mereka.</p>
					</div>
					<div className="w-2/4 flex justify-end">
						<img
							src={urlImage}
							width={600}
							height={500}
							alt=""
						/>
					</div>
				</div>
			</div>
			<div className="bg-[#ffff] h-screen justify-center flex-col flex px-[75px]">
				<div className="flex items-center justify-between w-full">
					<div className="w-2/4">
					<img
							src={imageurl}
							width={400}
							height={300}
							alt=""
						/>
					</div>
					<div className="w-2/4 justify-start">
					<h1 className="font-bold text-3xl w-[70%] mb-5 ml-20">
							Misi Utama Kami
						</h1>
						<p className="w-[100%] mb-4 text-2xl">Berupaya menghubungkan hewan peliharaan yang membutuhkan rumah dengan keluarga yang peduli melalui proses adopsi. Selain itu, kami memperjuangkan sterilisasi sebagai langkah preventif untuk mengendalikan populasi hewan peliharaan.</p>
					</div>
					<div className="w-1/8 flex justify-end">
						
					</div>
				</div>
			</div>
			<div className="bg-[#ffff] h-screen justify-center flex-col flex px-[75px]">
				<div className="flex items-center justify-between w-full">
					<div className="w-2/4">
						<p className="w-[100%] mb-4 text-2xl"> ADOCE juga berperan sebagai penggiat yang memperjuangkan hak-hak hewan akan mengedukasi masyarakat tentang perlunya perlindungan dan perawatan yang baik bagi hewan peliharaan.</p>
					</div>
					<div className="w-2/10 flex justify-end">
						<img
							src={Urlimage}
							width={400}
							height={300}
							alt=""
						/>
					</div>
				</div>
			</div>
<Footer/>
		</div>
		
	);
};

export default About;
