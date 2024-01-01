
import { cva, VariantProps } from 'class-variance-authority';

const alert = cva('p-3', {
  variants: {
    intent: {
      primary: 'border-bm_primary-500 bg-bm_primary-100 text-bm_primary-800',
      secondary: 'border-bm_secondary-500 bg-bm_secondary-100 text-bm_secondary-800',
      danger: 'border-bm_danger-500 bg-bm_danger-100 text-bm_danger-800',
      warning: 'border-bm_warning-500 bg-bm_warning-100 text-bm_warning-800',
      success: 'border-bm_success-500 bg-bm_success-100 text-bm_success-800',
      info: 'border-bm_info-500 bg-bm_info-100 text-bm_info-800',
      light: 'border-bm_light-500 bg-bm_light-100 text-bm_light-800',
      dark: 'border-bm_dark-500 bg-bm_dark-100 text-bm_dark-800',
    },
  }
});

export interface AlertProps extends VariantProps<typeof alert> {
  children?: React.ReactNode;
}

function Alert({ children, intent }: AlertProps) {
  return <div
    className={alert({ intent })}
  >{children}</div>
}

export default Alert;
