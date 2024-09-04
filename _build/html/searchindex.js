Search.setIndex({docnames:["architecture","architecture/CLIP","architecture/attention","architecture/mlp_mixer","architecture/positional_encoding","architecture/residual_blocks","architecture/sequence_model_archetypes","architecture/transformer_encoder","architecture/transformer_encoder_decoder","architecture/unet","beginning/ai_ethics","beginning/ai_research","beginning/foundational_math","beginning/history_2004","beginning/history_present","beginning/key_drivers_of_ai_progress","beginning/ml_is_different_than_software","beginning/ml_ops","beginning/ml_teams","beginning/project_workflow","beginning/prominent_ideas_in_ml","beginning/selecting_projects","beginning/training_nn","calculus","calculus/derivatives","calculus/langevin","calculus/laplacian","calculus/matrix_calculus","calculus/scalar_potential","calculus/vector_calculus","foundations","genai_image","generative/autoregressive_generative_model","generative/auxillary","generative/auxillary2","generative/comparison","generative/diffusion","generative/diffusion2","generative/gans","generative/inversion_by_direct_iteration","generative/normalizing_flows","generative/overview","generative/variational_autoencoder","gpu_perf","intro","math_optim","optimization/2nd_order_opt","optimization/AD_in_dl_frameworks","optimization/autodiff","optimization/backprop_equations","optimization/convex_functions","optimization/cpu","optimization/differentiating_functionals","optimization/dl_optim_alg","optimization/gpu","optimization/gpu_programming","optimization/gradient_descent","optimization/improving_model_perf","optimization/parallelism","optimization/performance_antipatterns","radiance","radiance/3DGS","radiance/epipolar_geometry","radiance/geometric_optics","radiance/nerf","radiance/pinhole","radiance/projection_matrix","radiance/radiance_field","radiance/rotations","radiance/sfm","radiance/volume_rendering","software","software/docker","software/pytorch","software/pytorch_lightning","statistics","statistics/central_limit_theorem","statistics/entropy","statistics/kl_divergence","statistics/mle"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinxcontrib.bibtex":9,sphinx:56},filenames:["architecture.md","architecture/CLIP.md","architecture/attention.md","architecture/mlp_mixer.md","architecture/positional_encoding.md","architecture/residual_blocks.md","architecture/sequence_model_archetypes.md","architecture/transformer_encoder.md","architecture/transformer_encoder_decoder.md","architecture/unet.md","beginning/ai_ethics.md","beginning/ai_research.md","beginning/foundational_math.md","beginning/history_2004.md","beginning/history_present.md","beginning/key_drivers_of_ai_progress.md","beginning/ml_is_different_than_software.md","beginning/ml_ops.md","beginning/ml_teams.md","beginning/project_workflow.md","beginning/prominent_ideas_in_ml.md","beginning/selecting_projects.md","beginning/training_nn.md","calculus.md","calculus/derivatives.md","calculus/langevin.md","calculus/laplacian.md","calculus/matrix_calculus.md","calculus/scalar_potential.md","calculus/vector_calculus.md","foundations.md","genai_image.md","generative/autoregressive_generative_model.md","generative/auxillary.md","generative/auxillary2.md","generative/comparison.md","generative/diffusion.md","generative/diffusion2.md","generative/gans.md","generative/inversion_by_direct_iteration.md","generative/normalizing_flows.md","generative/overview.md","generative/variational_autoencoder.md","gpu_perf.md","intro.md","math_optim.md","optimization/2nd_order_opt.md","optimization/AD_in_dl_frameworks.md","optimization/autodiff.md","optimization/backprop_equations.md","optimization/convex_functions.md","optimization/cpu.md","optimization/differentiating_functionals.md","optimization/dl_optim_alg.md","optimization/gpu.md","optimization/gpu_programming.md","optimization/gradient_descent.md","optimization/improving_model_perf.md","optimization/parallelism.md","optimization/performance_antipatterns.md","radiance.md","radiance/3DGS.md","radiance/epipolar_geometry.md","radiance/geometric_optics.md","radiance/nerf.md","radiance/pinhole.md","radiance/projection_matrix.md","radiance/radiance_field.md","radiance/rotations.md","radiance/sfm.md","radiance/volume_rendering.md","software.md","software/docker.md","software/pytorch.md","software/pytorch_lightning.md","statistics.md","statistics/central_limit_theorem.md","statistics/entropy.md","statistics/kl_divergence.md","statistics/mle.md"],objects:{},objnames:{},objtypes:{},terms:{"3d":44,architectur:44,book:[],bundl:[],calculu:44,check:[],content:[],cuda:44,foundat:44,gener:44,gpu:44,imag:44,mathemat:44,method:44,more:[],optim:44,out:[],page:[],perform:44,radianc:44,sampl:[],see:[],softwar:44,statist:44,text:[],thi:[]},titles:["Architecture","CLIP","Attention","MLP Mixer","Positional Encoding","Residual Blocks","Sequence Model Archetypes","Transformer Encoder","Transformer Encoder Decoder","UNet","AI Ethics","AI Research","Foundational Math","History: Up until early 2000\u2019s","History: Early 2000\u2019s to present","Key Drivers of AI Progress","Machine Learning is different than software","Machine Learning Ops","Machine Learning Team","Project Workflow","Prominent Ideas in ML","Selecting Projects","Training Neural Networks","Calculus","Derivatives","Langevin","Derivatives","Matrix Calculus","Scalar Potential","Vector Calculus","Foundations","Generative AI (Images)","Autoregressive Generative Models","Diffiusion Auxillary 1","Diffiusion Auxillary 2","Comparison Table","Diffusion Overview","Diffusion Overview Alternative","Generative Adversarial Networks","Inversion by direct iteration","Normalizing Flows","Overview","Variational Autoencoder","GPU, CUDA, and Performance","Introduction: Mind Maps of AI","Mathematical Optimization","Second Order Optimization","Automatic Differentiation in DL Frameworks","Automatic Differentiation","Backpropogation Equations","Convex Functions","CPU","Differentiating Functionals","Deep Learning Optimization Algorithms","GPU","GPU Programming","Gradient Descent","Improving Model Performance","Parallelism","Performance Antipatterns","3D and Radiance Methods","Gaussian Splatting","Epipolar Geometry","Geometric Optics","Neural Radiance Fields","Pinhole Camera Model","Projection Matrix","Radiance Fields","Rotation","Structure from Motion","Volume Rendering","Software","Docker","PyTorch","PyTorch Lightning","Statistics","Central Limit Theorem","Entropy","Kullback-Leibler Divergence","Maximum Likelihood Estimation"],titleterms:{"1":33,"2":34,"2000":[13,14],"3d":60,"function":[50,52],adversari:38,ai:[10,11,15,31,44],algorithm:53,altern:37,antipattern:59,archetyp:6,architectur:0,attent:2,autoencod:42,automat:[47,48],autoregress:32,auxillari:[33,34],backpropog:49,block:5,calculu:[23,27,29],camera:65,central:76,clip:1,comparison:35,convex:50,cpu:51,cuda:43,decod:8,deep:53,deriv:[24,26],descent:56,differ:16,differenti:[47,48,52],diffius:[33,34],diffus:[36,37],direct:39,diverg:78,dl:47,docker:72,driver:15,earli:[13,14],encod:[4,7,8],entropi:77,epipolar:62,equat:49,estim:79,ethic:10,field:[64,67],flow:40,foundat:[12,30],framework:47,from:69,gaussian:61,gener:[31,32,38],geometr:63,geometri:62,gpu:[43,54,55],gradient:56,histori:[13,14],idea:20,imag:31,improv:57,introduct:44,invers:39,iter:39,kei:15,kullback:78,langevin:25,learn:[16,17,18,53],leibler:78,lightn:74,likelihood:79,limit:76,machin:[16,17,18],map:44,math:12,mathemat:45,matrix:[27,66],maximum:79,method:60,mind:44,mixer:3,ml:20,mlp:3,model:[6,32,57,65],motion:69,network:[22,38],neural:[22,64],normal:40,op:17,optic:63,optim:[45,46,53],order:46,overview:[36,37,41],parallel:58,perform:[43,57,59],pinhol:65,posit:4,potenti:28,present:14,program:55,progress:15,project:[19,21,66],promin:20,pytorch:[73,74],radianc:[60,64,67],render:70,research:11,residu:5,rotat:68,s:[13,14],scalar:28,second:46,select:21,sequenc:6,softwar:[16,71],splat:61,statist:75,structur:69,tabl:35,team:18,than:16,theorem:76,train:22,transform:[7,8],unet:9,until:13,up:13,variat:42,vector:29,volum:70,workflow:19}})