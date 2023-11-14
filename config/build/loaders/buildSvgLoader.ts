export function buildSvgLoader() {
    return {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    /*
		// Git: https://github.com/utimur/webpack-course/blob/master/config/build/buildLoaders.ts
		// Видео: https://youtu.be/acAH2_YT6bs?t=6307

		// Если использовать svg-файлы как компоненты и 
		const svgrLoader = {
			test: /\.svg$/i,
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						icon: true, // дать возможность работать как с иконками, например, изменять width и height сразу всего файла, а не контейнера <svg> (см. видео по ссылке выше) и
						svgoConfig: {
							plugins: [
								{
									// дать возможность окрашивать иконку по пропсу "color" (см. видео по ссылке выше)
									name: 'convertColors',
									params: {
										currentColor: true,
									}
								}
							]
						}
					}
				}
			],
		}
	*/
}
