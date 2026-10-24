import {defineType,defineField} from 'sanity'
const REQ=['make','model','variant','year','price','mileage','fuel','transmission']
const t=(name:string,title:string,type='string',extra:object={})=>defineField({name,title,type,...(REQ.includes(name)?{validation:(r:any)=>r.required()}:{}),...extra} as any)
export const vehicle=defineType({name:'vehicle',title:'Car',type:'document',
 fields:[t('make','Make'),t('model','Model'),t('variant','Variant (e.g. 1.5 TFSI S Line)'),
  defineField({name:'slug',title:'Web address (click Generate)',type:'slug',options:{source:(d:any)=>`${d.year||''} ${d.make||''} ${d.model||''} ${d.variant||''}`,maxLength:80},validation:(r:any)=>r.required()}),
  t('year','Year','number'),t('price','Price (£)','number'),t('mileage','Mileage','number'),
  t('fuel','Fuel','string',{options:{list:['Petrol','Diesel','Hybrid','Electric']}}),
  t('transmission','Transmission','string',{options:{list:['Manual','Automatic']}}),
  t('status','Status','string',{options:{list:['Available','Reserved','Sold'],layout:'radio'},initialValue:'Available'}),
  t('images','Photos (first one is the main photo)','array',{of:[{type:'image'}],options:{layout:'grid'}}),
  t('featured','Show on home page','boolean'),t('reg','Registration'),t('engine','Engine size'),t('body','Body type'),t('colour','Colour'),
  t('doors','Doors','number'),t('owners','Previous owners','number'),t('mot','MOT expiry'),
  t('service','Service history','string',{options:{list:['Full','Partial','None']}}),
  t('cat','Write-off category','string',{options:{list:['None','Cat N repaired','Cat S repaired']},initialValue:'None'}),
  t('features','Key features','array',{of:[{type:'string'}]}),t('description','Description','text')],
 preview:{select:{make:'make',model:'model',variant:'variant',year:'year',status:'status',media:'images.0'},
  prepare:({make,model,variant,year,status,media}:any)=>({title:`${year||''} ${make||''} ${model||''} ${variant||''}`,subtitle:status,media})}})
