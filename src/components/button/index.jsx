/* eslint-disable react/prop-types */
// Menggunakan eslint directive untuk menonaktifkan peringatan terkait prop-types pada komponen

// Komponen Button
export const Button = ({ name, className, onClick }) => {
	return (
		// Elemen tombol dengan menggunakan Tailwind CSS classes
		<button
			onClick={onClick} // Menetapkan fungsi onClick yang diteruskan sebagai prop
			className={`${className ?? "bg-brand text-white"} py-2 text-xl px-6 rounded-3xl`}
		>
			{name} {/* Teks tombol yang diteruskan sebagai prop */}
		</button>
	);
};
