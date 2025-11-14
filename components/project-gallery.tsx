import Image from 'next/image'

interface ProjectGalleryProps {
  gallery: Array<{
    file: string
    caption: string
  }>
  title: string
}

export const ProjectGallery = ({ gallery, title }: ProjectGalleryProps) => {
  return (
    <ul>
      {gallery.map(async (image) => {
        return (
          <li key={image.file} className="mb-12">
            <div>
              <Image
                alt={`${title}: ${image.caption}`}
                src={`/work/${image.file}`}
                sizes="(max-width: 479px) 416px, (max-width: 767px) 432px, (max-width: 1023px) 720px, (max-width: 1279px) 976px, (min-width: 1280px) 916px"
                width={1600}
                height={1600}
              />
              <div className="pt-3">{image.caption}</div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
