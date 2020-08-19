export type dataType = {
  message: String,
  file: String,
  fixed: Boolean
}

type files = 'patients' | 'inspections' | 'summary'

export function extractDataByFixed(warnings: dataType[], fixedOrNot: boolean = true): dataType[] {
  return warnings.filter(w => w.fixed === fixedOrNot)
}

export function extractDataByFile(warnings: dataType[], file: files): dataType[] {
  return warnings.filter(w => w.file.indexOf(file) != -1)
}
