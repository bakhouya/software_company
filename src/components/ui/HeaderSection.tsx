

interface HeaderProps {
  sub?   : string;
  title? : string;
  desc?  : string;
}


export default function HeaderSection({sub, title, desc}: HeaderProps) {
    return (
        <div className="section_header">
          <div className="text_center">
            <h2 className="text text_body fs_3xl fw_bold lh_50">
              {title} <span className="text_primary">{sub} </span>
            </h2>

            <p className="text text_body"> {desc} </p>
          </div>
        </div>
    )
}

export function HeaderSectionLight({sub, title, desc}: HeaderProps) {
    return (
        <div className="section_header z_index_3">
          <div className="text_center">
            <h2 className="text text_body text_white fs_3xl fw_bold lh_50">
              {title} <span className="text_primary">{sub} </span>
            </h2>

            <p className="text text_body text_white"> {desc} </p>
          </div>
        </div>
    )
}