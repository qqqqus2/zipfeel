import{r as e}from"./index-DRjF_FHU.js";import{B as y}from"./button-CoOQMYwO.js";import{P as C,a as h,b,C as w,c as S,d as f,e as E,f as s,g as u}from"./popover-BbnK4DuY.js";import{c as i}from"./utils-BQHNewu7.js";import{c as G}from"./createLucideIcon-CfeEeys9.js";import{C as p}from"./check-BRxH6xXv.js";import"./index-DGwXhxKC.js";import"./index-Bms3GI6n.js";import"./jsx-runtime-DiklIkkE.js";import"./index-qKq4CP-D.js";import"./index-BtmGPRf8.js";import"./index-BKlBQwGM.js";import"./index-BbsOjWWI.js";import"./index-Impn2mNx.js";import"./index-8q2UQYpY.js";import"./index-DQDayTBB.js";import"./index-FhqXlugo.js";import"./index-BK8PFAvS.js";/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]],B=G("chevrons-up-down",T),k=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}];function F(){var l;const[m,o]=e.useState(!1),[n,c]=e.useState("");return e.createElement(C,{open:m,onOpenChange:o},e.createElement(h,{asChild:!0},e.createElement(y,{variant:"outline",role:"combobox","aria-expanded":m,className:"w-[200px] justify-between"},n?(l=k.find(t=>t.value===n))==null?void 0:l.label:"Select framework...",e.createElement(B,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"}))),e.createElement(b,{className:"w-[200px] p-0"},e.createElement(w,null,e.createElement(S,{placeholder:"Search framework..."}),e.createElement(f,null,e.createElement(E,null,"No framework found."),e.createElement(s,null,k.map(t=>e.createElement(u,{key:t.value,value:t.value,onSelect:a=>{c(a===n?"":a),o(!1)}},e.createElement(p,{className:i("mr-2 h-4 w-4",n===t.value?"opacity-100":"opacity-0")}),t.label)))))))}const ne={title:"UI/Combobox",component:F,parameters:{layout:"centered"},tags:["autodocs"]},d={render:()=>e.createElement(F,null)},v={render:()=>{var t;const[m,o]=e.useState(!1),[n,c]=e.useState(""),l=[{value:"react",label:"React",category:"Framework"},{value:"vue",label:"Vue",category:"Framework"},{value:"angular",label:"Angular",category:"Framework"},{value:"typescript",label:"TypeScript",category:"Language"},{value:"javascript",label:"JavaScript",category:"Language"},{value:"tailwind",label:"Tailwind CSS",category:"Styling"},{value:"sass",label:"Sass",category:"Styling"}];return e.createElement(C,{open:m,onOpenChange:o},e.createElement(h,{asChild:!0},e.createElement(y,{variant:"outline",role:"combobox","aria-expanded":m,className:"w-[250px] justify-between"},n?(t=l.find(a=>a.value===n))==null?void 0:t.label:"Select technology...",e.createElement(B,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"}))),e.createElement(b,{className:"w-[250px] p-0"},e.createElement(w,null,e.createElement(S,{placeholder:"Search technology..."}),e.createElement(f,null,e.createElement(E,null,"No technology found."),e.createElement(s,{heading:"Framework"},l.filter(a=>a.category==="Framework").map(a=>e.createElement(u,{key:a.value,value:a.value,onSelect:r=>{c(r===n?"":r),o(!1)}},e.createElement(p,{className:i("mr-2 h-4 w-4",n===a.value?"opacity-100":"opacity-0")}),a.label))),e.createElement(s,{heading:"Language"},l.filter(a=>a.category==="Language").map(a=>e.createElement(u,{key:a.value,value:a.value,onSelect:r=>{c(r===n?"":r),o(!1)}},e.createElement(p,{className:i("mr-2 h-4 w-4",n===a.value?"opacity-100":"opacity-0")}),a.label))),e.createElement(s,{heading:"Styling"},l.filter(a=>a.category==="Styling").map(a=>e.createElement(u,{key:a.value,value:a.value,onSelect:r=>{c(r===n?"":r),o(!1)}},e.createElement(p,{className:i("mr-2 h-4 w-4",n===a.value?"opacity-100":"opacity-0")}),a.label)))))))}},g={render:()=>{var t;const[m,o]=e.useState(!1),[n,c]=e.useState(""),l=["Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Chad","Chile","China","Colombia","Comoros","Congo"].map(a=>({value:a.toLowerCase().replace(/\s+/g,"-"),label:a}));return e.createElement(C,{open:m,onOpenChange:o},e.createElement(h,{asChild:!0},e.createElement(y,{variant:"outline",role:"combobox","aria-expanded":m,className:"w-[250px] justify-between"},n?(t=l.find(a=>a.value===n))==null?void 0:t.label:"Select country...",e.createElement(B,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"}))),e.createElement(b,{className:"w-[250px] p-0"},e.createElement(w,null,e.createElement(S,{placeholder:"Search country..."}),e.createElement(f,null,e.createElement(E,null,"No country found."),e.createElement(s,null,l.map(a=>e.createElement(u,{key:a.value,value:a.value,onSelect:r=>{c(r===n?"":r),o(!1)}},e.createElement(p,{className:i("mr-2 h-4 w-4",n===a.value?"opacity-100":"opacity-0")}),a.label)))))))}};var x,N,A;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <ComboboxDemo />
}`,...(A=(N=d.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var L,V,O;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    const options = [{
      value: "react",
      label: "React",
      category: "Framework"
    }, {
      value: "vue",
      label: "Vue",
      category: "Framework"
    }, {
      value: "angular",
      label: "Angular",
      category: "Framework"
    }, {
      value: "typescript",
      label: "TypeScript",
      category: "Language"
    }, {
      value: "javascript",
      label: "JavaScript",
      category: "Language"
    }, {
      value: "tailwind",
      label: "Tailwind CSS",
      category: "Styling"
    }, {
      value: "sass",
      label: "Sass",
      category: "Styling"
    }];
    return <Popover open={open} onOpenChange={setOpen}>\r
        <PopoverTrigger asChild>\r
          <Button variant="outline" role="combobox" aria-expanded={open} className="w-[250px] justify-between">\r
            {value ? options.find(option => option.value === value)?.label : "Select technology..."}\r
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />\r
          </Button>\r
        </PopoverTrigger>\r
        <PopoverContent className="w-[250px] p-0">\r
          <Command>\r
            <CommandInput placeholder="Search technology..." />\r
            <CommandList>\r
              <CommandEmpty>No technology found.</CommandEmpty>\r
              <CommandGroup heading="Framework">\r
                {options.filter(o => o.category === "Framework").map(option => <CommandItem key={option.value} value={option.value} onSelect={currentValue => {
                setValue(currentValue === value ? "" : currentValue);
                setOpen(false);
              }}>\r
                      <Check className={cn("mr-2 h-4 w-4", value === option.value ? "opacity-100" : "opacity-0")} />\r
                      {option.label}\r
                    </CommandItem>)}\r
              </CommandGroup>\r
              <CommandGroup heading="Language">\r
                {options.filter(o => o.category === "Language").map(option => <CommandItem key={option.value} value={option.value} onSelect={currentValue => {
                setValue(currentValue === value ? "" : currentValue);
                setOpen(false);
              }}>\r
                      <Check className={cn("mr-2 h-4 w-4", value === option.value ? "opacity-100" : "opacity-0")} />\r
                      {option.label}\r
                    </CommandItem>)}\r
              </CommandGroup>\r
              <CommandGroup heading="Styling">\r
                {options.filter(o => o.category === "Styling").map(option => <CommandItem key={option.value} value={option.value} onSelect={currentValue => {
                setValue(currentValue === value ? "" : currentValue);
                setOpen(false);
              }}>\r
                      <Check className={cn("mr-2 h-4 w-4", value === option.value ? "opacity-100" : "opacity-0")} />\r
                      {option.label}\r
                    </CommandItem>)}\r
              </CommandGroup>\r
            </CommandList>\r
          </Command>\r
        </PopoverContent>\r
      </Popover>;
  }
}`,...(O=(V=v.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var P,I,j;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo"].map(country => ({
      value: country.toLowerCase().replace(/\\s+/g, "-"),
      label: country
    }));
    return <Popover open={open} onOpenChange={setOpen}>\r
        <PopoverTrigger asChild>\r
          <Button variant="outline" role="combobox" aria-expanded={open} className="w-[250px] justify-between">\r
            {value ? countries.find(country => country.value === value)?.label : "Select country..."}\r
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />\r
          </Button>\r
        </PopoverTrigger>\r
        <PopoverContent className="w-[250px] p-0">\r
          <Command>\r
            <CommandInput placeholder="Search country..." />\r
            <CommandList>\r
              <CommandEmpty>No country found.</CommandEmpty>\r
              <CommandGroup>\r
                {countries.map(country => <CommandItem key={country.value} value={country.value} onSelect={currentValue => {
                setValue(currentValue === value ? "" : currentValue);
                setOpen(false);
              }}>\r
                    <Check className={cn("mr-2 h-4 w-4", value === country.value ? "opacity-100" : "opacity-0")} />\r
                    {country.label}\r
                  </CommandItem>)}\r
              </CommandGroup>\r
            </CommandList>\r
          </Command>\r
        </PopoverContent>\r
      </Popover>;
  }
}`,...(j=(I=g.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};const te=["Default","WithGroups","LargeList"];export{d as Default,g as LargeList,v as WithGroups,te as __namedExportsOrder,ne as default};
