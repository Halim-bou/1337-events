import React from "react";
import CardEvent from "./CardEvent";

const blogs = [
	{
	  imgUrl: "https://images-ext-1.discordapp.net/external/2Ekwv_DEU5TmbAtYEPMmWVwBOGI60KWd4PgfSXKLH4A/https/i.imgur.com/9IGWnis.png?format=webp&quality=lossless&width=832&height=468",
	  title: "The self-Taught journey",
	  description:
		"explores the path of self-driven tech learning, sharing insights, tips, and resources to help aspiring developers reach their 1337 (elite) potential.",
	},
	{
	  imgUrl: "https://media-hosting.imagekit.io//d4ea220921774e2a/fi-blg-3.jpg?Expires=1834635497&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JTRp~3vgWeKiDthGW2P69B0CkJRQFQOmpw7sEd0E~yASA95Ms0eBwxrc5FW00ueaqp2IalEUyyoIYe7QnW~F9s4a4~s-fApzttVaM4s04LK1UjGOH49de0dCgCiY3swr4N1YISo46UVQbjMU6DKxbOF1GGMusXJtmkgXvnPM8qhHH4mxRPcunbGl6YZKfZUt3OIYWg4oY~0fAB5y2-3PgblFaLEpceMmjX0QR73yzawsIa~ZgGvEopjffzXWxtyx-QCeRRB-HzfWrkffo0hMZgOiCmcKNDyRy3sOuFFyNXaVsQzi0UzHVjuo4moHfOHxclJsnrXZdQaATeCJnday5A__",
	  title: "B.tech in computer Science",
	  description:
		"B.Tech in Computer Science is a blog offering insights, tutorials, and resources on technology, programming, and innovations in the field.",
	},
	{
	  imgUrl: "https://media-hosting.imagekit.io//75a8c6e7478643f6/1733741751hydrogen.png?Expires=1834636409&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=FKFSiGwoEPipdQbk5xEqyrciBWf8UchMGAnuWUOfU1JW3k9CtaL47hP2MhKDF7qp-xucSPfXL2v-2~Tk-OCiZPa074FCA1S4oS1XdqtSxmI10QB~hhG3Jr4cRy-jfgR0mAM2x~W47CcOxiHT5Cl4qSlKf6MGwMYdZk2CPbzTf82hx9~W3EAJWZEZHLF20EmjOXb2fzBWpt0jZn5xWf9Yo4cu9mJSzdJFyel1Mjob2eo9EPS26tL9qu9VSOyg2xTD8PKmmRB~jZYtgGAOff88uO5M~jjLzBNJa75YQXrHp-GXhPibJjfHtmN6kBYi0VzPOtyg9644MIAdJPRTydZ1pg__",
	  title: "What is the Green Hydrogen?",
	  description:
		"Green hydrogen is hydrogen produced using renewable energy, offering a clean, sustainable alternative to traditional methods. It helps reduce carbon emissions and supports the transition to a greener future.",
	},
	{
	  imgUrl: "https://media-hosting.imagekit.io//0101384a94484fb5/NGT-1024x576.webp?Expires=1834636536&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Ig4vxdSg14AzN3gSBa-vSt56BbhnMaTCJamK6PkKRVgwUHD4ReZkUeKgUaWJHTo0zI9us~e5yqwusEPWJweQqn1mrb7kCmD-mLgtvWaAS0tei2lieN-bQt241QdlQcpbc6RsgHOu2TcdvdPkQ45qMSCT7EI78b85YIqq~NiWmLfD78kczP-AV0XeUj~m-pDih1cvP0vy1ixL9Z8ZQmvPlAQXl-YSmzXJaBlZZ0mRZI~-~ZWn07oPJJZXI2sh87rtQ16eThLc4JpgecS6XerYtGdbNl~eDoPHUMqbCqeh77JJZE3VVyyTAs-FfCM9wjZnvUxvY4MBQKbIvKnQoyUwvw__",
	  title: "Maroc Digital 2030",
	  description:
		"Morocco’s digital transformation, showcasing the latest trends, innovations, and technologies shaping the nation's future. It covers key developments in business, tech, and policy, offering insights into how Morocco is evolving in the digital age.",
	},
	{
	  imgUrl: "https://media-hosting.imagekit.io//d8d3370758024f07/ci-cd-et-devops.jpg?Expires=1834636722&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=z04bMVigsO-cCMyNaNruQszU35lGY3QE2JxBz0OeG~pF93YP6h5smEd94JCUgrjHWuWp4aHcK7YwtDou4jQ7IlT86wtz0098SVvy4MTIPftzJdsqVs41xhdOGG~mU~KENFiUkLBm4PqkZHPa7gYT2hYab2IS4ezh8li5jDgtcuelYT88Y09JGL0dkKAVLBVwPcAjYRUk4zV7nelzns6LOhJFvJmtHGGiieKjNebvWSoBmRgjQeBgY-G6iF50YEatKXxLFdJYac2fiqluok5YAtSt-W4UEtP5wPaKMh3FR~yqGGqjwisNQCSmf~KiZGDyu6O3~cmtmXTrqLwx8MI4KQ__",
	  title: "CI/CD and Devops",
	  description:
		"explores the synergy between Continuous Integration (CI), Continuous Deployment (CD), and DevOps practices, highlighting how they enhance collaboration, speed up software delivery, and improve product quality through automation and efficient workflows.",
	},
	{
	  imgUrl: "https://media-hosting.imagekit.io//240d12a0f7744e0a/blog_banner_template_18_0.png?Expires=1834636905&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1EYNtIuClf4EnR6EglgT5C84SnFUcz9P-eAQyGqkczZ~FD80BPICroXYr8kGSobe~w0FSA5c7nR45kU8HRHWcy6-0FG-Z-6XZVJLj799MoGxzSa1m-uhrY7dnRpXVw45J9dACpf3DHIy2EwkfbBXtQxN-pqniOaCHKqFkvsrt4UaMWGgOAUAAVNSFJUhTfGcQIQfBhFQiV21wAZtnnxv8E6Yjvk2yj-J6ZY008wPCwVTW1tmbqzQVX2wGcl1-yfLU1EinjX4jGvcXkBjkYHZRwKLfv5xYQj5KgQu4IbstjMHLcTrV0PtyQ85IclU0neVWyjVpFsd69l3NvkUYmvhrg__",
	  title: "Tips to live a peaceful life",
	  description:
		"Discover simple yet powerful tips to cultivate inner peace and balance in your daily life. From mindfulness practices to stress-reducing habits, explore practical steps to create a calm, harmonious environment for yourself.",
	},
  ];

  function ListBlogs({ maxBlogs = 3 }) {
	const blogsToShow = maxBlogs === 'all' || maxBlogs < 0 ? blogs : blogs.slice(0, maxBlogs);
	return (
	  <div
		className={`max-w-7xl mx-auto md:p-6 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8`}
	  >
		{blogsToShow.map((blog, index) => (
		  <div key={index}>
			<CardEvent event={blog} session={1}/>
		  </div>
		))}
	  </div>
	);
  }

export default ListBlogs;
