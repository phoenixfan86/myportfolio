
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

interface SkillCardProps {
  icon: any
  label: string
  desc: string
  classes?: string
  color: string
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, label, desc, color, classes }) => {
  return (
    <div className={'flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group' + classes}>
      <div className="text-center bg-zinc-700/50 rounded-lg size-12 overflow-hidden p-2 group-hover:bg-zinc-900 transition-colors">
        <FontAwesomeIcon icon={icon} className="text-4xl grayscale-75 hover:grayscale-0" style={{ color }} />
      </div>
      <div>
        <h3>{label}</h3>
        <p className="text-zinc-400 text-sm">{desc}</p>
      </div>
    </div>
  )
}

export default SkillCard