
export type Props = {
  className?: string;
  children: React.ReactNode;
}

function BaseAlert({ className, children }: Props) {
  return <div className={className}>
    {children}
  </ div >

}

export default BaseAlert;
