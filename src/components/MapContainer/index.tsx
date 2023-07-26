import React, { useEffect } from "react";
import { APILoader, APILoaderProps, Map } from "@uiw/react-amap";

type RenderProps =
	| {
			children?: (data: {
				AMap: typeof AMap;
				map: AMap.Map;
				container?: HTMLDivElement | null;
			}) => undefined;
	  }
	| { children?: React.ReactNode };

interface MapContainerProps
	extends APILoaderProps,
		AMap.MapEvents,
		AMap.MapOptions {
	className?: React.HTMLAttributes<HTMLDivElement>["className"];
	style?: React.HTMLAttributes<HTMLDivElement>["style"];
	children?: JSX.Element & RenderProps["children"];
}
const MapContainer: React.FC<MapContainerProps & { map?: AMap.Map }> = ({
	akey,
	version,
	plugins,
	className,
	style,
	children,
	...props
}) => {
	useEffect(() => {});
	return (
		<APILoader akey={akey} version={version} plugins={plugins}>
			<Map className={className} style={{ ...style }} {...props}>
				{children}
			</Map>
		</APILoader>
	);
};

export default MapContainer;
