import { themeSizesValue } from "@type/theme/themeSizes";
import { getClassname } from "src/lib/getClassname";

export const buttonClassnameSize = getClassname(themeSizesValue, "btn-");
