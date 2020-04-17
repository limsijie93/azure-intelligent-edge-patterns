import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Flex, Text, Image } from '@fluentui/react-northstar';

type BgImgStyle = {
  backgroundSize?: '60%';
  backgroundPosition?: 'center';
  backgroundRepeat?: 'no-repeat';
};
interface ImageLinkProps {
  to?: string;
  imgSrc?: string;
  defaultSrc?: string;
  bgImgSrc?: string;
  label?: string;
  imgPadding?: string;
  width: string;
  height?: string;
  bgImgStyle?: BgImgStyle;
  hasAnnotation?: boolean;
  pointerCursor?: boolean;
}
const ImageLink: FC<ImageLinkProps> = ({
  to = '',
  imgSrc,
  defaultSrc,
  bgImgSrc,
  label = '',
  imgPadding = '10px',
  width = '100px',
  height = '100px',
  bgImgStyle,
  hasAnnotation = false,
  pointerCursor = false,
}) => {
  if (!hasAnnotation)
    return (
      <Flex column styles={{ width }}>
        {to === '' ? (
          <div style={{ height }}>
            <Image
              src={imgSrc ?? defaultSrc}
              styles={{
                padding: imgPadding,
                height: '100%',
                objectFit: 'contain',
                backgroundImage: `url(${bgImgSrc})`,
                cursor: pointerCursor? 'pointer': 'default',
                ...bgImgStyle,
              }}
            />
          </div>
        ) : (
          <Link to={to}>
            <div style={{ height }}>
              <Image
                src={imgSrc ?? defaultSrc}
                styles={{
                  padding: imgPadding,
                  height: '100%',
                  objectFit: 'contain',
                  backgroundImage: `url(${bgImgSrc})`,
                  ...bgImgStyle,
                }}
              />
            </div>
          </Link>
        )}
        <Text align="center">{label}</Text>
      </Flex>
    );

  return <div>Annotation Image</div>;
};

export default ImageLink;
